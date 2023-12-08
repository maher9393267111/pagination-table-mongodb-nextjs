import { useRouter } from "next/router";
import { Container } from "semantic-ui-react";
import { Grid, Button, Pagination, Typography } from "@mui/material";

function ProductPagination({ totalPages }) {
  const router = useRouter();

  const handleChange = (evt, value) => {
    evt.preventDefault();

    value === 1 ? router.push("/table") : router.push(`/table?page=${value}`);
  };

  return (
    <Container className=" mt-1 ">
      <div className="   flex justify-center   md:justify-end">
        <Pagination
          count={totalPages}
          value={1}
          onChange={(evt, value) => handleChange(evt, value)}
          className=""
        />
      </div>
    </Container>
  );
}

export default ProductPagination;




// const nav = (num) => {
//   // navigate({
//   //     search: `page=${num}${queryStr ? `&search=${queryStr}` : ''}`,
//   // })

//   if (num === 1) {
//     router.push("/table");
//   } else {
//     router.push(`/table?page=${num}`);
//   }
// };

{
  /* // Semantic pagination */
}

{
  /* <Pagination
          className=" !bg-white xs:!w-[300px] !sm:w-screen  overflow-hidden !text-black"
          defaultActivePage={5}
          totalPages={totalPages}
          onPageChange={(event, data) => {
            console.log("data--->", data);
            data.activePage === 1
              ? router.push("/table")
              : router.push(`/table?page=${data.activePage}`);
          }}
        /> */
}
