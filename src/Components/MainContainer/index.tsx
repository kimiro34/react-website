import React, { useEffect, useState } from "react";
import { useStyles, CardItem } from "./MainContainerStyle";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { GoogleLogin } from "react-google-login";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setlogin } from "../../store/auth";
import { selectLoginStatus } from "../../store/auth/selectors";
import { getNames } from "../../store/names/selectors";
import { setNames } from "../../store/names";
import { client_id } from "../../Constant";

export default function MainContainer() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const loginStatus = useAppSelector(selectLoginStatus);
  const names = useAppSelector(getNames);

  const loginHandler = (res: any) => {
    dispatch(setlogin(res.profileObj));
  };
  const failureHandler = (res: any) => {
    console.log("login failed", res);
  };

  useEffect(() => {
    if (loginStatus === "true") dispatch(setNames());
  }, [loginStatus]);

  return (
    <div className={classes.root}>
      {loginStatus === "false" ? (
        <div className={classes.loginContainer}>
          <GoogleLogin
            clientId={client_id}
            render={(renderProps) => (
              <Button onClick={renderProps.onClick} variant="contained">
                Sign In with Google
              </Button>
            )}
            onSuccess={loginHandler}
            onFailure={failureHandler}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        <div className={classes.cardContainer}>
          {names?.length > 0 &&
            names.map((name: any, key: any) => (
              <CardItem key={key}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {name.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {name.nickname}
                    </Typography>
                  </CardContent>
                </Card>
              </CardItem>
            ))}
        </div>
      )}
    </div>
  );
}
