import { Form, Input, Button, Select } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const AddFoodForm = () => {
  const { TextArea } = Input;
  const { Option } = Select;

  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        requiredMarkValue: requiredMark,
      }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
      text
    >
      <Form.Item
        label={<label style={{ color: "black" }}>Nombre</label>}
        required
      >
        <Input placeholder="Ingrese el nombre del alimento" />
      </Form.Item>

      <Form.Item
        wrapperCol={{ sm: 24 }}
        label={<label style={{ color: "black" }}>Imagen</label>}
        tooltip={{
          title: "Seleccione una imagen del alimento",
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input placeholder="Cargue la imagen del alimento" />
        <Button type="primary">Cargar imagen</Button>
      </Form.Item>

      <Form.Item
        wrapperCol={{ sm: 24 }}
        label={<label style={{ color: "black" }}>Imagen</label>}
        tooltip={{
          title: "Seleccione el ícono del alimento",
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input placeholder="Cargue el ícono del alimento" />
        <Button type="primary">Cargar ícono</Button>
      </Form.Item>

      <Form.Item
        label={<label style={{ color: "black" }}>Grupo exportable</label>}
        required
      >
        <Input placeholder="Ingrese el grupo exportable" />
      </Form.Item>

      <Form.Item
        label={<label style={{ color: "black" }}>Sub grupo exportable</label>}
        required
      >
        <Input placeholder="Ingrese el grupo sub exportable" />
      </Form.Item>

      <Form.Item
        label={
          <label style={{ color: "black" }}>Clasificación exportable</label>
        }
        required
      >
        <Input placeholder="Ingrese la clasificación exportable" />
      </Form.Item>

      <Form.Item
        label={<label style={{ color: "black" }}>Grupo de alimento</label>}
        required
      >
        <Input placeholder="Ingrese el grupo de alimento al que pertenece" />
      </Form.Item>

      <Form.Item
        label={<label style={{ color: "black" }}>Mensaje</label>}
        required
      >
        <TextArea rows={2} placeholder="Ingrese el mensaje" />
      </Form.Item>

      <Form.Item
        label={
          <label style={{ color: "black" }}>Opciones de preparación</label>
        }
        required
      >
        <Input placeholder="Ingrese las opciones de preparación" />
      </Form.Item>

      <Form.Item
        label={<label style={{ color: "black" }}>Cantidad de alimentos</label>}
        required
      >
        <Select defaultValue="0" style={{ width: 120 }}>
          {Array.from({ length: 15 }).map((_, index) => (
            <option value={index} key={index}>
              {index}
            </option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label={<label style={{ color: "black" }}>Calorías de alimentos</label>}
        required
      >
        <Select defaultValue="0" style={{ width: 120 }}>
          {Array.from({ length: 15 }).map((_, index) => (
            <option value={index} key={index}>
              {index}
            </option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default AddFoodForm;
