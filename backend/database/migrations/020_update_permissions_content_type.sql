UPDATE permissions
SET content_type_id = 1
WHERE permission_codename IN (
    'list_user',
    'create_user',
    'view_user',
    'edit_user',
    'generate_report_user',
    'can_toggle'
);