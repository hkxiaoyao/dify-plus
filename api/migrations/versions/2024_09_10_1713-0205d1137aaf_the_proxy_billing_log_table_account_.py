"""The proxy billing log table account_layover_record"

Revision ID: 0205d1137aaf
Revises: 7eaee114bcee
Create Date: 2024-09-10 17:13:17.919964

"""
import sqlalchemy as sa
from alembic import op

import models as models

# revision identifiers, used by Alembic.
revision = '0205d1137aaf'
down_revision = '7eaee114bcee'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('account_layover_record_extend', schema=None) as batch_op:
        batch_op.add_column(sa.Column('info', sa.JSON(), nullable=True))
        batch_op.add_column(sa.Column('created_at', sa.DateTime(), server_default=sa.text('CURRENT_TIMESTAMP(0)'), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('account_layover_record_extend', schema=None) as batch_op:
        batch_op.drop_column('created_at')
        batch_op.drop_column('info')
    # ### end Alembic commands ###
