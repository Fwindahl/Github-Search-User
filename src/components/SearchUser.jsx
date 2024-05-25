import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function SearchUser({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-between w-full max-w-xl gap-8 "
    >
      <Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border-none text-background bg-foreground"
        type="text"
        placeholder="Search for Github users.."
      />
      <Button variant="outline" type="submit">
        Search
      </Button>
    </form>
  );
}
