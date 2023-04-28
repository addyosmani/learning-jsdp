
import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';


const Home = lazy(
  () => import(/* webpackChunkName: "home" */ './Home')
);
const Channel = lazy(
  () => import(/* webpackChunkName: "channel" */ './Channel')
);
const Threads = lazy(
  () => import(/* webpackChunkName: "threads" */ './Threads')
);
const Contacts = lazy(
  () => import(/* webpackChunkName: "contacts" */ './Contacts')
);
