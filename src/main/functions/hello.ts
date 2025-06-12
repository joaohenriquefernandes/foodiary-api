import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { HelloController } from '../../application/controllers/HelloController';
import { lambdaBodyParser } from '../utils/lambdaBodyParser';

const controller = new HelloController();

export async function handler(event: APIGatewayProxyEventV2) {
  const params = event.pathParameters ?? {};
  const queryParams = event.queryStringParameters ?? {};
  const body = lambdaBodyParser(event.body);
  return controller.handle({
    body,
    params,
    queryParams,
  });
}
