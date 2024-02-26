import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="h1-bold">Hello World</h1>
      <LoginButton>
        <Button>Login</Button>
      </LoginButton>
    </div>
  );
}
