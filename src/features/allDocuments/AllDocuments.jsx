import { useSelector } from "react-redux";
import { selectAllDocuments } from "./allDocumentsSlice";
import DocumentTile from "../../components/DocumentTile/DocumentTile";

const AllDocuments = () => {
  const allDocuments = useSelector(selectAllDocuments);

  return (
    <div className="all-documents">
      {allDocuments.map((document) => <DocumentTile key={document.id} document={document} />)}
    </div>
  );
};

export default AllDocuments;
