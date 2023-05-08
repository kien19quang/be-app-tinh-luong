import { Type, applyDecorators } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

export const ApiResponseSuccessDto = <TModel extends Type<any>>(
  model: TModel,
  isArray?: boolean,
) => {
  return applyDecorators(
    ApiOkResponse({
      status: 200,
      schema: {
        properties: {
          data: isArray
            ? {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              }
            : {
                $ref: getSchemaPath(model),
              },
          success: { type: 'boolean' },
        },
      },
    }),
  );
};
