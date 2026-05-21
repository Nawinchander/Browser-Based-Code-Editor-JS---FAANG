import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';

export function highlight(code) {
  return Prism.highlight(
    code,
    Prism.languages.javascript,
    'javascript'
  );
  <>
  <pre id="highlighted"></pre>
  </>
}