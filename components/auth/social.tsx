"use client"

import { FaGoogle, FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

const Social = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get("callbackUrl")
    const onClick = (provider: "google" | "github") => {
        signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
    }

    return (
        <div className="flex items-center w-full gap-x-2">
            <Button size={"lg"} className="w-full" onClick={() => onClick("google")}>
                <FaGoogle className="h-5 w-5" />
            </Button>
            <Button size={"lg"} className="w-full" onClick={() => onClick("github")}>
                <FaGithub className="h-5 w-5" />
            </Button>
        </div>
    );
}

export default Social;