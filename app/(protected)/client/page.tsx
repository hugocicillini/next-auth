"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
  const user = useCurrentUser();

  return ( 
    <UserInfo
      label="Informações do Usuário"
      user={user}
    />
   );
}
 
export default ClientPage;