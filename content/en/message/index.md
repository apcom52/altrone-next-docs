# Message

`Message` is a block with a message right on the page. It tells the user something important exactly where it matters: that a form was saved, that a plan is about to expire, that the connection was lost or that an action failed. The message doesn't vanish on its own and doesn't cover the page, so people have time to read it, and its color and icon show at a glance whether it is good news, a warning or an error.

## Basic usage

The heading goes in `title`, the explanation is the content. Both are optional, but at least one should be present: an empty message says nothing.

```tsx
<Message title="Custom code is not validated">
  Incorrect code may impact your website's performance.
</Message>
```

::playground{src=message/MessageBasicDemo caption="A heading and an explanation under it"}

## Severity

`severity` sets color and urgency: `primary` follows the application accent, while `success`, `warning` and `danger` are fixed green, yellow and red. Without `severity` the message is neutral. Add `icon` so the kind reads without color.

```tsx
<Message icon={<Info />} severity="primary" title="Your trial ends in 3 days." />
<Message icon={<Check />} severity="success" title="Your changes were saved." />
<Message icon={<TriangleAlert />} severity="warning" title="Storage is almost full." />
<Message icon={<CircleAlert />} severity="danger" title="Failed to connect to the server." />
```

::playground{src=message/MessageSeverityDemo caption="A neutral message and four severity levels"}

Without an icon the horizontal padding grows so the text doesn't hug the edge.

## Dismissing

If you pass `onClose`, a close button appears in the corner. The message doesn't hide itself or keep any state — remove it from the markup in the handler.

```tsx
const [visible, setVisible] = useState(true);

{visible && (
  <Message severity="primary" title="New features are available." onClose={() => setVisible(false)} />
)}
```

::playground{src=message/MessageDismissibleDemo caption="After closing, the message can be brought back"}

## Actions

`actions` renders a row of buttons under the text: one element or an array. Use them for the next step the message suggests.

```tsx
<Message
  icon={<Download />}
  severity="success"
  title="The data export you requested is ready"
  actions={[
    <Button key="download" label="Download" variant="submit" />,
    <Button key="later" label="Maybe later" />,
  ]}
>
  The file is available for 7 days.
</Message>
```

::playground{src=message/MessageActionsDemo caption="The main action is a highlighted button, the secondary one is plain"}

## Compact layout

`compact` puts the heading and the explanation on one wrapping line and centers them on the icon. It suits short messages between form blocks or above a table.

```tsx
<Message icon={<Check />} severity="success" title="Successfully uploaded" compact onClose={dismiss}>
  3 files were added to the project.
</Message>
```

::playground{src=message/MessageCompactDemo caption="The heading and the text share a line"}

## Accessibility

The root element gets a role by severity: `danger` is `role="alert"`, and the screen reader interrupts to read it; the others are a polite `role="status"`. To use another role, pass `ariaRole`. The icon is decorative and hidden from screen readers, so the meaning must be in the text.

```tsx
<Message title="Loading data…" ariaRole="status" />
```

## Props

:::prop[title]{type="ReactNode"}
The message heading. It replaces the native `title` attribute, so there is no hover tooltip.
:::

:::prop[children]{type="ReactNode"}
The explanation under the heading.
:::

:::prop[icon]{type="ReactElement"}
An icon to the left of the text, usually from `lucide-react`.
:::

:::prop[severity]{type="'primary' | 'success' | 'warning' | 'danger'"}
Color and urgency. Without a value the message is neutral.
:::

:::prop[actions]{type="ReactElement | ReactElement[] | (() => ReactElement | ReactElement[])"}
Elements, usually `Button`, in a row under the text.
:::

:::prop[onClose]{type="(event: MouseEvent<HTMLButtonElement>) => void"}
If passed, shows a close button. Your code must hide the message.
:::

:::prop[compact]{type="boolean" default="false"}
The heading and the explanation on one wrapping line.
:::

:::prop[ariaRole]{type="AriaRole" default="'alert' for danger, else 'status'"}
Replaces the root element role.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Reference to the root element.
:::

## Related topics

- [Dialogs](/en/components/overlays/dialog) — a modal question when an answer is needed immediately
- [Button](/en/components/controls/button) — buttons for `actions`
- [Progress](/en/components/feedback/progress) — shows how a process is going rather than its outcome
