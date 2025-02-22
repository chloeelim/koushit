"""change thing

Revision ID: 752ea141fa0e
Revises: bcdf66a287e6
Create Date: 2025-01-19 07:11:53.404092

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '752ea141fa0e'
down_revision: Union[str, None] = 'bcdf66a287e6'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('submission',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('attempt_id', sa.Integer(), nullable=False),
    sa.Column('file', sa.String(), nullable=False),
    sa.Column('text', sa.String(), server_default='', nullable=False),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=False),
    sa.Column('updated_at', sa.DateTime(), server_default=sa.text('now()'), nullable=False),
    sa.Column('deleted_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['attempt_id'], ['attempt.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_column('attempt', 'text')
    op.drop_column('attempt', 'file')
    op.add_column('comment', sa.Column('submission_id', sa.Integer(), nullable=False))
    op.drop_constraint('comment_attempt_id_fkey', 'comment', type_='foreignkey')
    op.create_foreign_key(None, 'comment', 'submission', ['submission_id'], ['id'])
    op.drop_column('comment', 'attempt_id')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('comment', sa.Column('attempt_id', sa.INTEGER(), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'comment', type_='foreignkey')
    op.create_foreign_key('comment_attempt_id_fkey', 'comment', 'attempt', ['attempt_id'], ['id'])
    op.drop_column('comment', 'submission_id')
    op.add_column('attempt', sa.Column('file', sa.VARCHAR(), autoincrement=False, nullable=False))
    op.add_column('attempt', sa.Column('text', sa.VARCHAR(), server_default=sa.text("''::character varying"), autoincrement=False, nullable=False))
    op.drop_table('submission')
    # ### end Alembic commands ###
