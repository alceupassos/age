import { useForm } from "react-hook-form";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AddGoalModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onAddGoal: (goal: any) => void;
}

const AddGoalModal = ({ open, onOpenChange, onAddGoal }: AddGoalModalProps) => {
    const { register, handleSubmit, setValue, reset } = useForm();

    const onSubmit = (data: any) => {
        onAddGoal(data);
        reset();
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Definir Nova Meta</DialogTitle>
                    <DialogDescription>
                        Estabeleça um objetivo de saúde para acompanhar seu progresso.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="metricName">Métrica</Label>
                        <Select onValueChange={(val: string) => setValue("metricName", val)}>

                            <SelectTrigger>
                                <SelectValue placeholder="Selecione a métrica" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Peso">Peso</SelectItem>
                                <SelectItem value="Pressão Arterial">Pressão Arterial</SelectItem>
                                <SelectItem value="Glicemia">Glicemia</SelectItem>
                                <SelectItem value="Passos Diários">Passos Diários</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="currentValue">Valor Atual</Label>
                            <Input id="currentValue" {...register("currentValue")} placeholder="Ex: 80kg" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="targetValue">Valor Meta</Label>
                            <Input id="targetValue" {...register("targetValue")} placeholder="Ex: 75kg" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="targetDate">Data Alvo</Label>
                        <Input id="targetDate" type="date" {...register("targetDate")} />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Salvar Meta</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddGoalModal;
