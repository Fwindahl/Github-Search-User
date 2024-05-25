"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const UserInfo = ({ userData }) => {
  console.log(userData);

  if (!userData) {
    return (
      <section className="flex w-full h-[500px] bg-primary rounded-md">
        <div className="flex items-start justify-center w-full h-full pt-12 border">
          <p>Loading...</p>
        </div>
      </section>
    );
  }
  let firstLastNameLetter = userData.login[0] + userData.login[1];
  return (
    <section className="flex w-full h-[500px] bg-primary rounded-md">
      <div className="flex flex-col items-center justify-start w-1/4 h-full px-3 pt-8 border">
        <Avatar className="">
          <AvatarImage src={userData.avatar_url} alt="@User Avatar" />
          <AvatarFallback>{firstLastNameLetter}</AvatarFallback>
        </Avatar>
        <span className="text-sm">@{userData.login}</span>
      </div>
      <div className="flex flex-col w-full gap-6 border">
        <div className="grid grid-cols-2 border ">
          <h2>{userData.name}</h2>
          <h4>Joined: {userData.created_at}</h4>
          <Link href="">{userData.company}</Link>
          <p className="col-start-1">
            bio:{" "}
            {userData.bio
              ? userData.bio
              : `${userData.name} havent write anything in bio`}
          </p>
        </div>
        <div className="flex text-center rounded-md justify-evenly bg-background">
          <div>
            <p>Public Repos</p>
            <span>{userData.public_repos}</span>
          </div>
          <div>
            <p>Followers</p>
            <span>{userData.followers}</span>
          </div>
          <div>
            <p>Following</p>
            <span>{userData.following}</span>
          </div>
        </div>
        <section className="grid grid-cols-2">
          <span>{userData.location}</span>
          <span>
            {userData.twitter_username
              ? userData.twitter_username
              : "No Twitter account"}
          </span>
          <span>blog</span>
          <span>html_url</span>
        </section>
      </div>
    </section>
  );
};

export default UserInfo;
