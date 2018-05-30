import React, { Component } from 'react';
import isModal from './utils/HOCModal';

const testModal= () => (<div> hello modal </div>);

export default isModal(testModal);