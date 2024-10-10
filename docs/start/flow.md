# Code Automation Tool System Flow

## System Flow Overview

The Code Automation Tool streamlines the process of item code creation through a structured flow that ensures accuracy and efficiency. Below is the detailed flow of the application:

1. **End User Requisition Submission**
   - The end user fills out the requisition form to initiate the item code creation process.

2. **Automatic Validation**
   - Before saving, the system automatically checks if the item code and description already exist in the JD server of RSB.

3. **Save Requisition**
   - If the item code does not exist, the user can save the requisition.

4. **Department Validation**
   - The saved requisition undergoes validation by the Operations, Finance, and Admin departments.

5. **Rejection Handling**
   - If any incorrect data is found, the requisition will be rejected by any department with remarks provided.

6. **Editing Rejected Requisition**
   - The end user can edit the rejected requisition, making changes only to data that does not affect the item code and description.

7. **Final Validation**
   - The validated requisition is then pushed to the JD server for final processing.

## System Flow Diagram


``` mermaid


    flowchart TD
        A["End User Fills Requisition Form"] --> B["Automatic Validation"]
        B -- Item Code Not Exists --> C["Save Requisition"]
        B -- Item Code Exist --> D["Display the available Description"]
        C --> F["Department Validation"]
        F -- Data Correct --> G["Admin Aproove"]
        G --> H["Push to JD Server"]
        F -- Data Incorrect --> I["Rejection with Remarks"]
        I --> A
        D --> n1["Restrict to save"]

```