import Prism from "prismjs";

export default function Index() {
    return(
        <div>
            <pre>
  <code className="language-javascript">
  {`
    onSubmit(e) {
      e.preventDefault();
      const job = {
        title: 'Developer',
        company: 'Facebook' 
        };
      }
  `}
  </code>
</pre>
        </div>
    )
}