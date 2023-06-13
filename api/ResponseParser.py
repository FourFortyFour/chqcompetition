class ResponseParser:
    def __init__(self, response):
        self.responses = response
        self.fields = {}

    def stage_1(
        self,
    ):
        ini = self.responses[0]
        splitup = ini.split("\n")
        splitup_2 = [ans[3:] for ans in splitup]
        meds = [
            medium.strip().lower().replace(" ", "-")
            for medium in splitup_2.pop().split(",")
        ]
        date = "NA"
        teacher_name = "Mian Humayun"

        self.fields = {
            "date": date,
            "teacher-name": teacher_name,
            "supporting-materials": meds,
        }

        for field in splitup_2:
            broken_field = field.split(":")
            self.fields[broken_field[0].lower().replace(" ", "-")] = broken_field[
                1
            ].strip()

    def stage_2(
        self,
    ):
        los = self.responses[1]

        text = los

        # Split the text based on question headers
        questions = text.split("\n\n")

        # Create a dictionary to store the responses
        response_dict = {}
        keys = ["knowledge", "skills", "understandings"]

        # Iterate over the questions and extract the responses
        for i, question in enumerate(questions):
            lines = question.split("\n")
            q = keys[i]  # Extract the question
            responses_lo = lines[1:]  # Extract the responses
            response_dict[q] = responses_lo

        self.fields.update(response_dict)

        ##Differentiation
        diff = self.responses[2]

        text = diff

        # Split the text based on question headers
        questions = text.split("\n\n")

        # Create a dictionary to store the responses
        response_dict = {}
        keys = ["differentiation", "additional"]
        # Iterate over the questions and extract the responses
        for i, question in enumerate(questions):
            lines = question.split("\n")
            q = keys[i]  # Extract the question
            responses_lo = lines[1:]  # Extract the responses
            response_dict[q] = responses_lo

        self.fields.update(response_dict)

    def stage_3(
        self,
    ):
        les = [
            "prepare",
            "plan",
            "investigate",
            "apply",
            "connect",
            "evaluate",
            "assessment",
            "reflect",
        ]

        for i in range(3, 11):
            self.fields[les[i - 3]] = self.responses[i]

    def parse(
        self,
    ):
        self.stage_1()
        self.stage_2()
        self.stage_3()

        return self.fields
