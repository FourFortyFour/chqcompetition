from . import turbo_dict

# import os
from flask_restful import Resource, reqparse

# api_key = os.environ.get("OPENAI_API_KEY")
# print(api_key)


class ApiHandler(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            "query", required=True, type=str, help="query cannot be blank"
        )
        # parser.add_argument("response", type=str)

        args = parser.parse_args()
        # getting the query from post request
        query = args["query"]
        # request_json = args["response"]
        # ret_msg = request_json
        final_respone = {
            "resultStatus": "SUCCESS",
            # "message": query,
            "response": turbo_dict.get_lessonplan_dict(query),
        }
        return final_respone
