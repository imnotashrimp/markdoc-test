---
rpcMethod: GetContact
output: rest
restConfig:
  httpVerb: GET
  endpointUrl: https://www.wixapis.com/contacts/v4/contacts/{contactId}
veloConfig:
  module: wix-crm-backend
  submodule: contacts
  params: contactId
  responseObjName: contact
codeExamples:
  basic:
    pathParams:
      contactId: e1ff6e4b-cfa0-5ec3-aa83-6735973856c5
    requestObj: null
    responseObj: >-
      {
        "contact": {
          "info": {
            "name": {
              "first": "Shalom",
              "last": "The Mighty"
            }
          }
        }
      }
---

Showing output for: {% $markdoc.frontmatter.output %}

# {% method frontmatter=$markdoc.frontmatter /%}

Gets a contact.

## **Description**

{% velo %}
{% method frontmatter=$markdoc.frontmatter /%}
returns a Promise that resolves to the retrieved contact.
{% /velo %}

&nbsp;

## Getting merged contacts

When a source contact is merged with a target contact,
the source contact is deleted. When calling
{% method frontmatter=$markdoc.frontmatter /%}
for a merged contact,
you can use the source or target contact ID.
In both cases, the target contact is returned.

This is supported only when calling
{% method frontmatter=$markdoc.frontmatter /%},
and only for merged contacts.
Deleted source contact IDs are not supported on any other
{% rest %}endpoint.{% /rest %}{% velo %}function.{% /velo %}

&nbsp;


{% velo %}

> Notes:
>
> - This function replaces the deprecated `wixCrmBackend.getContactById()`.
>   The deprecated function will continue to work,
>   but it will not receive updates.
>   To keep any existing code compatible with future changes,
>   see the migration instructions.
> - Only visitors with **Manage Contacts** permissions can retrieve contacts.
>   You can override the permissions by setting the `suppressAuth` option to `true`.

{% /velo %}

### Code example

{% codeExample frontmatter=$markdoc.frontmatter /%}
