import React from "react";
import { useFetchSession } from "~/hooks/useSession";
import { signIn, signOut } from "next-auth/react";
import Button from "~/components/common/Button";
import styles from "./Topbar.module.scss";

export default function Topbar() {
  const { session } = useFetchSession();
  return (
    <div className={styles.authBtn}>
      {session ? (
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => signOut()}
            btnClass="btn-primary"
            title="SIGN OUT"
          />
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
              <img src={session?.user.image} alt={session?.user.name} />
            </div>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => signIn()}
          btnClass="btn-primary"
          title="SIGN IN"
        />
      )}
    </div>
  );
}
