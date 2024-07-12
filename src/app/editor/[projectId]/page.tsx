import { Editor } from "@/app/features/editor/components/editor";

interface EditorProjectIdPageProps {
  params: {
    projectId: string;
  };
}

const EditorProjectIdPage = ({
  params: { projectId },
}: EditorProjectIdPageProps) => {
  return <Editor></Editor>;
};

export default EditorProjectIdPage;
