package br.edu.alfaumuarama.hackathon;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

import br.edu.alfaumuarama.hackathon.datasources.DownloadImagem;

public class DetalhesActivity extends AppCompatActivity {

    TextView nome;
    TextView species;
    TextView status;
    ImageView imagem;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detalhes);

        nome = findViewById(R.id.nome);
        species = findViewById(R.id.species);
        status = findViewById(R.id.status);
        imagem = findViewById(R.id.imageView);

        Intent dadosRecebidos = getIntent();
        if (dadosRecebidos != null) {

            Bundle params = dadosRecebidos.getExtras();
            if (params != null) {

                nome.setText(params.getString("nome"));
                species.setText(params.getString("species"));
                status.setText(params.getString("status"));

                new DownloadImagem(imagem).execute(params.getString("url"));
            }
        }
    }
}