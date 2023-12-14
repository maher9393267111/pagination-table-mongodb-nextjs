<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
  <TableHead>
    {/* <TableRow>
 
    </TableRow> */}
    <TableRow>
      <TableCell align="center">
        <Checkbox />
      </TableCell>
      <TableCell align="center">Title</TableCell>
      <TableCell align="center">Desc</TableCell>
      <TableCell align="center">usersNumber</TableCell>
    
    </TableRow>
  </TableHead>
  <TableBody>
    {products?.map((value) => (
      <TableRow key={value._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell align="center">
          <Checkbox />
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {value?.name}
        </TableCell>
        <TableCell align="center"> {value?.price} </TableCell>
        <TableCell align="center"> {value?.description} </TableCell>
    
      </TableRow> 
    ))}
  </TableBody>
</Table>



</TableContainer>  # pagination-table-mongodb-nextjs
# pagination-table-mongodb-nextjs
# pagination-table-mongodb-nextjs
# pagination-table-mongodb-nextjs
# pagination-table-mongodb-nextjs


------------
 <Row>
        <Col textAlign="center">
          <Button onClick={todosStore.showTodoData())}>Open modal</Button>
          {todosStore.openModal && (
            <Modal onClose={todosStore.closeModal }>
              <Header tag="h2">Do you need plant food?</Header>
              <Body>
                To boost your plants chances of success, use a combination of
                top-quality soil and the right plant food. Try growing in
                containers filled with plant food, which can help protect plants
                from over-watering.
              </Body>
              <Footer>
                <FooterItem>
                  <Button onClick={() => setVisible(false)} isBasic>
                    Cancel
                  </Button>
                </FooterItem>
                <FooterItem>
                  <Button isPrimary onClick={() => setVisible(false)}>
                    Add plant food
                  </Button>
                </FooterItem>
              </Footer>
              <Close aria-label="Close modal" />
            </Modal>
          )}
        </Col>
      </Row>