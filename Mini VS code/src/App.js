import './styles/app.css';

export function App() {
  return `
    <div class="app">

      <aside class="sidebar">
        File Explorer
      </aside>

      <main class="editor-section">

        <header class="tabs">
          Tabs
        </header>

        <section class="editor-container">
          <textarea id="editor"></textarea>
        </section>

      </main>

    </div>
  `;
}