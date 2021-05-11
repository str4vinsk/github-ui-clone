import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  Advice,
  Readme,
} from "./styles";
import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RepoTab from "../../components/RepoTab";
import RandomCalendar from "../../components/RandomCalendar";

function Profile() {
  const { username = "str4vinsk" } = useParams();
  const [data, setData] = useState({exist: true});

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
      fetch(
        `https://raw.githubusercontent.com/${username}/${username}/master/README.md`
      ),
    ]).then(async (responses) => {
      const [userResponse, reposResponse, readmeResponse] = responses;
      let exist = true;

      if (userResponse.status === 404) {
        setData({ error: "User Not found!" });
        return;
      }

      if (readmeResponse.status === 404) {
        exist = false;
      }

      const user = await userResponse.json();
      const repo = await reposResponse.json();
      const readme = await readmeResponse.text();

      const slicedRepos = repo.slice(0, 6);

      setData({
        user,
        repo,
        slicedRepos,
        readme,
        exist,
      });
    });
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.user || !data?.repo) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Helmet>
        <title>{`${data.user.login} (${data.user.name})`}</title>
      </Helmet>
      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            bio={data.user.bio}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
            twitter={data.user.twitter_username}
          />
        </LeftSide>
        <RightSide>
          <RepoTab count={data.user.public_repos} />
          {data.exist && (
            <Readme>
              <span>{`${data.user.login} / README.md`}</span>
              <MarkdownPreview className="md" source={data.readme} />
            </Readme>
          )}
          <Repos>
            <h2>Popular repositories</h2>
            <div>
              {data.slicedRepos.map((n) => (
                <RepoCard
                  key={n.name}
                  reponame={n.name}
                  description={n.description}
                  stars={n.stargazers_count}
                  forks={n.forks}
                />
              ))}
            </div>
          </Repos>
          <Advice>Random Calendar (do not represent actual data)</Advice>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;
