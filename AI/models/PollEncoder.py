import torch
from torch import nn
import  Date2Vec
class PollEncoder():
    def __init__(self) -> None:
        self.embedding_parties = nn.Embedding(len(Parties),128)
        self.embedding_type = nn.Embedding(len(Type),128)
        self.embedding_companies = nn.Embedding(len(Type),128)
        self.date = Date2Vec(32,"sin")
    def forward():
        pass