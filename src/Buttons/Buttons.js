import React, {useState, useEffect} from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import './Buttons.css';

const Buttons = () => {
  return (
    <section className="buttonWorldWrap">
      <h1 className="title">Button World</h1>
    <section className="buttonsWrap">
      <article className="buttonWrap">
        <div className="button1">
          <span className="noselect">One</span>
          <div id="circle"></div>
        </div>
      </article>
      <article className="buttonWrap2">
          <div className="button2">
            <span className="button2__span">Two</span>
          </div>
          <div className="sun" id="sunset"></div>
      </article>
      <article className="buttonWrap">
        <button className="button3">Three</button>
      </article>
      <article className="buttonWrap" id="buttonWrap4">
        <div className="btn4border">
          <button className="button4">Four</button>
        </div>
      </article>
      <article className="buttonWrap" id="buttonWrap5">
        <div className="btnContainer5">
          <span className="button5">Five</span>
          <div className="liquid"></div>
        </div>
      </article>
      <article className="buttonWrap">
        <button className="button6">Six</button>
      </article>
      <article className="buttonWrap" id="buttonWrap7">
        <button className="button7">Seven</button>
      </article>
      <article className="buttonWrap">
        <button className="button8">Eight</button>
      </article>
      <article className="buttonWrap" id="buttonWrap9">
        <div className="button9 pulse"></div>
        <button className="button9">9</button>
      </article>
      <article className="buttonWrap" id="buttonWrap10">
        <section className="button10">
          <div className="miniBtn10" id="btnT">T</div>
          <div className="miniBtn10" id="btnE">E</div>
          <div className="miniBtn10" id="btnN">N</div>
        </section>
      </article>
      <article className="buttonWrap">
        <button className="button11">Eleven</button>
      </article>
      <article className="buttonWrap">
        <button className="button12">Twelve</button>
      </article>
      <article className="buttonWrap">
        <button className="button13">Thirteen</button>
      </article>
      <article className="buttonWrap">
        <button className="button14">Fourteen</button>
      </article>
      <article className="buttonWrap">
        <button className="button15">Fifteen</button>
      </article>
      <article className="buttonWrap">
        <button className="button16">Sixteen</button>
      </article>
      <article className="buttonWrap">
        <button className="button17">Seventeen</button>
      </article>
      <article className="buttonWrap">
        <button className="button18">Eighteen</button>
      </article>
      <article className="buttonWrap">
        <button className="button19">Nineteen</button>
      </article>
      <article className="buttonWrap">
        <button className="button20">Twenty</button>
      </article>
    </section>
    </section>
  )
}

export default Buttons;
