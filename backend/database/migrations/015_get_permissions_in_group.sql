INSERT INTO group_permissions (
    group_id,
    permission_id
)
SELECT 
    1,
    permission_id
FROM permissions
WHERE permission_codename IN (
    'edit_user',
    'generate_report_user'
);