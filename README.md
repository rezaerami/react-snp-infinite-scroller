<div>
    <img src="logo.png" width="250px" />
    <h1>react-infinite-scroller-snp</h1>
</div>
<div>
    <section>
      <h2>
        <span>Step 1: </span>
        <b>Install it</b>
      </h2>
      <p>Install react-infinite-scroller-snp using <a target="_blank" href="https://www.npmjs.com/package/react-infinite-scroller-snp">npm</a></p>
      <pre>npm install --save react-infinite-scroller-snp</pre>
    </section>
    <section>
      <h2>
        <span>Step 2: </span>
        <b>Import it</b>
      </h2>
      <p>Import it into your component</p>
      <pre>import {useElementScroll, useWindowScroll} from 'react-infinite-scroller-snp';</pre>
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