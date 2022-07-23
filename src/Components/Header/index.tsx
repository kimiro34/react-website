import { Typography, Button } from "@mui/material";
import { HeaderRoot, HeaderContainer, UserContent } from "./HeaderStyle";
import { GoogleLogout } from "react-google-login";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectLoginStatus,
  selectLoginEmail,
  selectLoginPicture,
} from "../../store/auth/selectors";
import { setlogout } from "../../store/auth";
import { client_id } from "../../Constant";

export default function Header() {
  const dispatch = useAppDispatch();
  const loginStatus = useAppSelector(selectLoginStatus);
  const loginEmail = useAppSelector(selectLoginEmail);
  const loginPicture = useAppSelector(selectLoginPicture);

  const logoutHandler = () => {
    dispatch(setlogout());
  };

  return (
    <HeaderRoot>
      <HeaderContainer>
        <Typography variant="h4">Wonderbox Labs</Typography>
        {loginStatus === "true" && (
          <UserContent>
            <img src={loginPicture}></img>
            <Typography variant="h5">{loginEmail}</Typography>
            <GoogleLogout
              clientId={client_id}
              render={(renderProps) => (
                <Button onClick={renderProps.onClick} variant="contained">
                  logout
                </Button>
              )}
              onLogoutSuccess={logoutHandler}
            ></GoogleLogout>
          </UserContent>
        )}
      </HeaderContainer>
    </HeaderRoot>
  );
}
