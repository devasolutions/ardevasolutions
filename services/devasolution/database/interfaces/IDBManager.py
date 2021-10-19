

from abc import abstractmethod


class IDBManager():

    def __init__(self) -> None:
        pass

    @abstractmethod
    def find(self,query:str)->dict:
        pass
