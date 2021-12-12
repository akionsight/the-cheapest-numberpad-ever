from pydantic import BaseModel, validator, validators


class Key(BaseModel):
    key: int

