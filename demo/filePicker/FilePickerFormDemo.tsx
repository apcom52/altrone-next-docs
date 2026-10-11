"use client";

import { FilePicker, Flex, Form } from "altrone-ui";

export default function FilePickerFormDemo() {
  return (
    <Form size="l">
      <Flex orientation="vertical" gap="s">
        <Form.Field name="resume">
          <FilePicker autoUpload={false} />
        </Form.Field>
        <Form.Field name="portfolio" disabled>
          <FilePicker autoUpload={false} />
        </Form.Field>
      </Flex>
    </Form>
  );
}
