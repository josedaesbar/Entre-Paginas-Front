import PrincipalScreen from "@templates/PrincipalScreen";
import BookName from "components/pages/BookName";
import { useRouter } from "next/dist/client/router";

const BookPage = () => {
  const router = useRouter();

  return (
    <>
      {router.query.bookName !== undefined && (
        <PrincipalScreen>
          <BookName bookId={router.query.bookName.toString()} />
        </PrincipalScreen>
      )}
    </>
  );
};

export default BookPage;
