import { auth } from "@/authentication/auth";
import LoginButton from "@/components/auth/LoginButton";
import { UserNav } from "@/components/auth/UserNav";
import { Button } from "@/components/ui/button";

const Home = async () => {
  const session = await auth();

  if (!session) {
    return (
      <div>
        <h1 className="h1-bold">Hello World</h1>
        <LoginButton>
          <Button>Login</Button>
        </LoginButton>
      </div>
    );
  } else {
    return <UserNav user={session?.user} />;
  }
};
export default Home;
