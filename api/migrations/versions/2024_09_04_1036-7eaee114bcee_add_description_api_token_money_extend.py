"""add_description_column_api_token_money_extend

Revision ID: 7eaee114bcee
Revises: aa93d972c8c9
Create Date: 2024-09-04 10:36:52.331336

"""
import sqlalchemy as sa
from alembic import op

import models as models

# revision identifiers, used by Alembic.
revision = '7eaee114bcee'
down_revision = 'aa93d972c8c9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('api_token_money_extend', schema=None) as batch_op:
        batch_op.add_column(sa.Column('description', sa.String(length=50), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('api_token_money_extend', schema=None) as batch_op:
        batch_op.drop_column('description')

    # ### end Alembic commands ###
