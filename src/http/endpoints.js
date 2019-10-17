/*
THESE ENDPOINTS ARE USED STRICTLY FOR DEVELOPMENT
Postman workspace: https://www.getpostman.com/collections/6d71292435ac8e8ee5f7
*/

const postmanUrl = 'https://5e3e750d-ad4f-4d7d-8199-54355ba2e62d.mock.pstmn.io/traffic-data/';

export const endpoints = {
  COUNT_POINTS: `${postmanUrl}count-points?filter[local_authority_id]=21`,
  COUNT_POINT_DETAILS: `${postmanUrl}count-points/:count_point_id`,
  AVERAGE_ANNUAL_DAILY_FLOW_BY_DIRECTION: `${postmanUrl}average-annual-daily-flow-by-direction?filter[local_authority_id]=21&page[number]=1`,
  COUNT_POINT_COUNT_DATA: `${postmanUrl}average-annual-daily-flow-by-direction?filter[count_point_id]=:count_point_id`
};
