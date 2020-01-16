<div>
    <img src="logo.jpg" />
    <h1>react-snp-infinite-scroller</h1>
    <section>
      <h2>
        <span>Step 1: </span>
        <b>Install it</b>
      </h2>
      <p>Install react-snp-infinite-scroller using <a target="_blank" href="https://www.npmjs.com/package/react-infinite-scroller-snp">npm</a></p>
      <pre>npm install --save react-snp-infinite-scroller</pre>
    </section>
    <section>
      <h2>
        <span>Step 2: </span>
        <b>Import it</b>
      </h2>
      <p>Import it into your component</p>
      <pre>import {useElementScroll, useWindowScroll} from 'react-snp-infinite-scroller';</pre>
    </section>
    <section>
      <h2>
        <span>Step 3: </span>
        <b>Use it</b>
      </h2>
      <p>Make window or an element call a function each time that it reaches to the end of the page</p>
      <pre>useElementScroll(elementRef, fn, threshold);
useWindowScroll(fn, threshold);</pre>
    </section>
  </div>
