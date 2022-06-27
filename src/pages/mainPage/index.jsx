import React, { Component } from 'react';
import './index.scss'

import LeftBlackBox from '../../components/leftBlackBox';
import RightInfo from '../../components/rightInfo';
import AuthorInfo from '../../components/authorInfo';
import LeftTopInfo from '../../components/leftTopInfo';
import LeftBottomInfo from '../../components/leftBottomInfo';
import LeftMiddleInfo from '../../components/leftMiddleInfo';

class MainPage extends Component {
  state = {

  }
  render() {
    return (
      // 使用 mobile 样式激活移动端
      <div ref={c => this.mainSwiper = c} id="mainBox" className='mobile'>
        <LeftBlackBox />
        <RightInfo />
        <AuthorInfo>powered by<strong>&nbsp;rhine lab</strong></AuthorInfo>
        <LeftTopInfo />
        <LeftBottomInfo>Copyright © 2019 - {new Date().getFullYear()}</LeftBottomInfo>
        <LeftMiddleInfo />
      </div>
    );
  }

  componentDidMount() {
    console.log(this.mainSwiper);
  }
}

export default MainPage;