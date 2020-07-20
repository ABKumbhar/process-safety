import React from 'react';
import { Route } from 'react-router';
 
export default (
    <Route>
         <Route exact path="/" />  
            <Route path='/industry' />
            <Route path='/equipment' />
            <Route path='/industry-question/:slug' />

    </Route>
);
