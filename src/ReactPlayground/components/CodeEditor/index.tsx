import { useContext } from 'react';
import Editor from './Editor';
import FileNameList from './FileNameList';
import { PlaygroundContext } from '../../PlaygroundContext';
import { debounce } from 'lodash-es';

export default function CodeEditor() {
  const { files, selectedFileName, setFiles } = useContext(PlaygroundContext);

  const file = files[selectedFileName];
  function onEditorChange(value?: string) {
    console.log('0000');

    files[selectedFileName].value = value!;
    setFiles({ ...files });
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <FileNameList />
      <Editor file={file} onChange={debounce(onEditorChange, 500)} />
    </div>
  );
}
