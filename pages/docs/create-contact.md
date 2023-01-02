---
rpcMethod: CreateContact
restConfig:
  httpVerb: POST
  endpointUrl: https://www.wixapis.com/contacts/v4/contacts/
veloConfig:
  module: wix-crm-backend
  submodule: contacts
  params: contact, options
  responseObjName: contact
codeExamples:
  basic:
    requestObj: >-
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

Creates a new contact.

## **Description**

{% velo %}
{% method frontmatter=$markdoc.frontmatter /%}
returns a Promise that resolves to a new contact.
{% /velo %}

&nbsp;

The request must include a name, phone number, or email address.
If all 3 of these options are missing, the contact won't be created.

By default,
when attempting to create a contact
with an email already used by another contact,
the new contact won't be created.
To override this behavior, set the `allowDuplicates` option to `true`.

{% internal %}

## Internal notes

Dude. DUDE. You can now have internal notes
alongside the external stuff.

{% /internal %}

## Code example

{% codeExample frontmatter=$markdoc.frontmatter /%}

## Params

{% table %}
* Property
* Type
* Description
---
* `picture`
* object
*
  Reserved for internal use.

  {% internal %}
  We deprecated this field for TPAs in 2022.
  We'll continue to support it internally until June 30, 2023.
  {% /internal %}
{% /table %}
