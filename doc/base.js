const { default: PayDetails } = _PayDetails;
const { default: Form } = _reactFormAntd;

const BaseExample = () => {
  return (
    <Form>
      <PayDetails name="pay-details" label="薪资" />
    </Form>
  );
};

render(<BaseExample />);
