import { Tooltip, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { QuestionMark } from "@mui/icons-material";
import "@/components/ui/codeTooltip.css"

interface CodeTooltipProps {
    code: {
        key: string;
        value_type: string;
        description: string;
        comment: string;
        name?: string;
    };
}

const CodeTooltip: React.FC<CodeTooltipProps> = ({ code }) => {
    return (
        <Tooltip
            title={<CodeTooltipContent code={code} />}
            arrow
            className="codeTooltip"
            sx={{ whiteSpace: 'normal', maxWidth: '300px' }} // 增加最大宽度
        >
            <span style={{ marginLeft: "5px" }}>
                <QuestionMark
                    sx={{
                        marginLeft: '2px',
                        cursor: 'help',
                        color: 'var(--bg-200)',
                        width: "15px",
                        bgcolor: 'var(--bg-300)',
                        borderRadius: '50%',
                        height: "15px",
                    }}
                />
            </span>
        </Tooltip>
    );
};

const CodeTooltipContent: React.FC<{ code: CodeTooltipProps['code'] }> = ({ code }) => {
    return (
        <Table sx={{
            bgcolor: "transparent",
            maxWidth: "100%", // 确保表格宽度为100%
            width: "100%", // 明确设置宽度为100%
            tableLayout: 'fixed' // 添加固定表格布局
        }}>
            <TableBody sx={{ background: "transparent" }}>
                {code.key && <CodeTooltipRow label="原名" value={code.key} />}
                {code.value_type && <CodeTooltipRow label="类型" value={code.value_type} />}
                {code.description && <CodeTooltipRow label="解释" value={code.description} />}
                {code.comment && <CodeTooltipRow label="评论" value={code.comment} />}
            </TableBody>
        </Table>
    );
};

const CodeTooltipRow: React.FC<{ label: string; value: string }> = ({ label, value }) => {
    return (
        <TableRow>
            <TableCell sx={{ color: 'var(--primary-200)', whiteSpace: 'normal', wordWrap: 'break-word', width: '50px', padding: "0", paddingLeft: "17px" }}>{label}</TableCell>
            <TableCell sx={{ color: "var(--text-100)", whiteSpace: 'normal', wordWrap: 'break-word' }}>{value}</TableCell>
        </TableRow>
    );
};

export default CodeTooltip;