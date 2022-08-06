import styled from "@emotion/styled";
export const StyleWrapper = styled.div`
    .fc-button.fc-prev-button,
    .fc-button.fc-next-button,
    .fc-button.fc-button-primary {
      background: rgb(224, 224, 224);
      border-color: rgb(224, 224, 224);
      font-weight: 600;
    }
    ,
    .fc-timegrid-slots {
      cursor: pointer;
    }
    ,
    .fc-button.fc-button-primary:hover {
      background: #e49433 !important;
      border-color: #e49433;
    }
    .fc-button.fc-next-button {
      background: #e49433 !important;
    }
    ,
    .fc-prev-button.fc-button.fc-button-primary.fc-button-active {
      background: #f5f5f5 !important;
    }
    ,
    .fc-timeGridWeek-button.fc-button.fc-button-primary.fc-button-active {
      background: #e49433 !important;
      border-color: #e49433;
    }
    ,
    .fc .fc-toolbar-title {
      font-size: 1em !important;
    }
    .fc-view-harness.fc-view-harness-active {
      height: 350px !important;
    }
  `;