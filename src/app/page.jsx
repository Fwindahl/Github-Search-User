"use client";
import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { SearchUser } from "@/components/SearchUser";
import UserInfo from "@/components/UserInfo";

export default function Home() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("Fwindahl");
  }, []);

  return (
    <div className="flex items-start justify-center h-full border">
      <main className="flex p-7 flex-col w-[600px] max-w-xl gap-4   bg-background h-1/2">
        <section className="flex items-center justify-between ">
          <h1 className="text-foreground">Devfinder</h1>
          <ModeToggle />
        </section>
        <section className="p-3 rounded-md shadow-md bg-primary ">
          <SearchUser onSearch={fetchData} />
        </section>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <UserInfo userData={userData} />
        )}
      </main>
    </div>
  );
}
