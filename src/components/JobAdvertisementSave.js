import React from "react";
import { Form, Button, TextArea, Select } from "semantic-ui-react";

import { Field } from "formik";

export default function JobAdvertisementSave(props) {
  return (
    <>
      <Form.Group widths="equal">
        <Form.Field
          fluid
          name="positionId"
          control={Select}
          options={props.positionOptions}
          placeholder="İş Pozisyonu *"
          required
        />

        <Form.Input
          fluid
          name="openPositionsAmount"
          icon="briefcase"
          iconPosition="left"
          placeholder="Açık Pozisyon Sayısı *"
          type="number"
          required
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Field
          fluid
          name="cityId"
          control={Select}
          placeholder="Şehir *"
          options={props.cityOptions}
          required
        />

        <Form.Field
          fluid
          name="workingTimeId"
          control={Select}
          options={props.workingTimeOptions}
          placeholder="Çalışma Şekli *"
          required
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input
          fluid
          name="minSalary"
          icon="money"
          iconPosition="left"
          placeholder="Min. Maaş"
          type="number"
        />

        <Form.Input
          fluid
          name="maxSalary"
          icon="money"
          iconPosition="left"
          placeholder="Maks. Maaş"
          type="number"
        />
      </Form.Group>

      <Form.Input
        fluid
        name="deadline"
        icon="calendar alternate"
        iconPosition="left"
        placeholder="Son Başvuru Tarihi"
        type="date"
        required
      />

      <Form.Input
        fluid
        name="description"
        control={TextArea}
        icon="file text"
        iconPosition="left"
        placeholder="Açıklama *"
        required
      />

      <br />
      <Button type="submit" color="teal" fluid size="large">
        Oluştur
      </Button>
    </>
  );
}
