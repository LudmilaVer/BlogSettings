import React, { useContext } from 'react';
import { BlogSettingsContext } from './BlogSettingsProvider';

function Article() {
  const { settings } = useContext(BlogSettingsContext);

  return (
    <div style={{ fontSize: settings.fontSize, lineHeight: settings.lineHeight }}>
      <p>This is an example paragraph in the blog article. Notice how it responds to the settings.</p>
      <p>The second paragraph here continues to explain the context and useContext hooks in React.</p>
    </div>
  );
}

export default Article;